import React, {useEffect, useRef} from 'react';
import Head from '@docusaurus/Head';
import pieRuntime from './pieRuntime';

// The recipe is written once, as data. The same data builds the page, the
// Schema.org Recipe markup in the head, and (through the page text) the
// copy in llms-full.txt, so the three can't drift apart.
// Amounts are [quantity, unit] for one pie. `m` is the metric version.
const GROUPS = [
  {title: 'Crust', items: [
    {id: 'flour', us: [2.5, 'cup'], m: [315, 'g'], name: 'all-purpose flour'},
    {id: 'salt', us: [1, 'tsp'], name: 'fine salt'},
    {id: 'sugar', us: [1, 'tbsp'], name: 'sugar'},
    {id: 'butter', us: [1, 'cup'], m: [226, 'g'], name: 'cold unsalted butter, cut into small cubes'},
    {id: 'water', us: [[6, 8], 'tbsp'], m: [[90, 120], 'ml'], name: 'ice water'},
  ]},
  {title: 'Filling', items: [
    {id: 'cherries', us: [6, 'cup'], m: [900, 'g'], name: 'pitted sour cherries, fresh or frozen (thawed and drained)'},
    {id: 'fsugar', us: [0.75, 'cup'], m: [150, 'g'], name: 'sugar'},
    {id: 'starch', us: [0.25, 'cup'], m: [32, 'g'], name: 'cornstarch'},
    {id: 'cardamom', us: [1, 'tsp'], name: 'ground cardamom, ideally ground fresh from about 10 pods'},
    {id: 'lemon', us: [1, 'tbsp'], name: 'lemon juice'},
    {id: 'almond', us: [0.25, 'tsp'], name: 'almond extract (optional)'},
    {id: 'pinch', name: 'A pinch of salt'},
    {id: 'fbutter', us: [1, 'tbsp'], m: [14, 'g'], name: 'unsalted butter, cut into small bits'},
  ]},
  {title: 'To finish', items: [
    {id: 'egg', us: [1, 'egg'], name: 'beaten with the milk'},
    {id: 'milk', us: [1, 'tbsp'], m: [15, 'ml'], name: 'milk'},
    {id: 'csugar', us: [1, 'tbsp'], name: 'coarse sugar, for sprinkling'},
  ]},
];

// {temp:425} is a Fahrenheit temperature and {len:12} is a length in
// inches. Both switch with the units.
const STEPS = [
  {id: 'crust', title: 'Make the crust', timer: 60,
    text: 'Whisk the flour, salt, and sugar in a big bowl. Add the cold butter and press each cube flat between your fingers, until you have flaky pieces the size of coins and peas. Drizzle in the ice water a spoonful at a time, tossing with a fork, until the dough holds together when you squeeze it. Split it in half, press each half into a disk, wrap them, and chill for at least an hour.'},
  {id: 'filling', title: 'Make the filling', timer: 15,
    text: 'Stir together the cherries, sugar, cornstarch, cardamom, lemon juice, almond extract, and salt. Let it sit for 15 minutes, so the sugar draws out some juice and the cornstarch dissolves.'},
  {id: 'line', title: 'Line the plate',
    text: 'Heat the oven to {temp:425} with a rack in the lower third. Roll one disk into a {len:12} circle and fit it into a {len:9} pie plate. Pour in the filling and scatter the bits of butter on top.'},
  {id: 'lattice', title: 'Weave the top', timer: 20,
    text: 'Roll out the second disk and cut it into strips. Weave them into a lattice over the filling, trim the overhang, then fold the edges under and crimp them. Chill the whole pie for 20 minutes, so the butter firms up again.'},
  {id: 'hot', title: 'Bake it hot', timer: 20,
    text: 'Brush the lattice with the egg and milk, sprinkle on the coarse sugar, and set the pie on a baking sheet. Bake for 20 minutes.'},
  {id: 'long', title: 'Then bake it longer', timer: 40,
    text: 'Lower the oven to {temp:375} and bake for another 40 to 50 minutes, until the crust is deep golden and the filling bubbles in the middle, not just at the edges. If the edges brown too fast, cover them with foil.'},
  {id: 'cool', title: 'Wait', timer: 180,
    text: 'Let the pie cool for at least 3 hours before you slice it. The filling sets as it cools. I know.'},
];

const rt = pieRuntime();
const TOKEN = /\{(temp|len):(\d+)\}/g;
const plain = (text) => text.replace(TOKEN, (_, k, v) => (k === 'temp' ? rt.temp(+v, 'us') : rt.length(+v, 'us')));
const line = (it) => (it.us ? `${rt.amount(it, 1, 'us')} ${it.name}` : it.name);
const timerLabel = (min) => (min % 60 ? `${min} minute timer` : `${min / 60} hour timer`);

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Cherry pie with cardamom and an all-butter crust',
  description: 'A lattice-top sour cherry pie with cardamom in the filling and a crust made with butter as its only fat.',
  author: {'@type': 'Person', name: 'Clara Christopher'},
  recipeCategory: 'Dessert',
  keywords: 'cherry pie, cardamom, all-butter crust, lattice pie',
  recipeYield: ['1 pie', '8 servings'],
  prepTime: 'PT1H30M',
  cookTime: 'PT1H10M',
  totalTime: 'PT5H45M',
  recipeIngredient: GROUPS.flatMap((g) => g.items.map(line)),
  recipeInstructions: STEPS.map((s) => ({'@type': 'HowToStep', name: s.title, text: plain(s.text)})),
};

function StepText({text}) {
  const parts = [];
  let last = 0;
  text.replace(TOKEN, (m, k, v, at) => {
    parts.push(text.slice(last, at));
    parts.push(k === 'temp'
      ? <span key={at} data-temp={v}>{rt.temp(+v, 'us')}</span>
      : <span key={at} data-len={v}>{rt.length(+v, 'us')}</span>);
    last = at + m.length;
    return m;
  });
  parts.push(text.slice(last));
  return <p>{parts}</p>;
}

// Runs the controls on a static copy of the page, where React never loads.
// On the live site React is present, and the effect below does it instead.
const BOOT = `(function(){function go(){if(!window.docusaurus)(${pieRuntime.toString()})().enhance(document.querySelector('.pie'))}if(document.readyState==='complete')go();else window.addEventListener('load',go)})();`;

export default function Recipe() {
  const ref = useRef(null);
  useEffect(() => { pieRuntime().enhance(ref.current); }, []);
  return (
    <div className="pie" ref={ref}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(LD)}</script>
      </Head>

      <div className="pie-controls pie-js">
        <span className="pie-seg" role="group" aria-label="How many pies">
          <span className="pie-seg-label">Pies</span>
          {[1, 2, 3].map((n) => (
            <button key={n} type="button" data-pies={n} aria-pressed={n === 1}>{n}</button>
          ))}
        </span>
        <span className="pie-seg" role="group" aria-label="Units">
          <button type="button" data-units="us" aria-pressed="true">US</button>
          <button type="button" data-units="metric" aria-pressed="false">Metric</button>
        </span>
        <button type="button" className="pie-btn" data-wake aria-pressed="false" hidden>Keep screen on</button>
        <button type="button" className="pie-btn" data-print>Print</button>
      </div>

      <p className="pie-yield" data-yield>One pie, about 8 slices.</p>

      <div className="pie-cols">
        <section aria-labelledby="pie-ingredients">
          <h2 id="pie-ingredients">Ingredients</h2>
          {GROUPS.map((g) => (
            <React.Fragment key={g.title}>
              <h3>{g.title}</h3>
              <ul className="pie-list">
                {g.items.map((it) => (
                  <li key={it.id}>
                    <label>
                      <input type="checkbox" data-id={`i-${it.id}`} />
                      <span>
                        {it.us && <><b data-amt={JSON.stringify({us: it.us, m: it.m})}>{rt.amount(it, 1, 'us')}</b>{' '}</>}
                        {it.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          <button type="button" className="pie-reset pie-js" data-reset>Clear the checkmarks</button>
        </section>

        <section aria-labelledby="pie-steps">
          <h2 id="pie-steps">Steps</h2>
          <ol className="pie-steps">
            {STEPS.map((s) => (
              <li key={s.id}>
                <label className="pie-step-head">
                  <input type="checkbox" data-id={`s-${s.id}`} />
                  <b>{s.title}</b>
                </label>
                <StepText text={s.text} />
                {s.timer && (
                  <button type="button" className="pie-timer pie-js" data-timer={s.timer}>
                    Start a {timerLabel(s.timer)}
                  </button>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{__html: BOOT}} />
    </div>
  );
}
