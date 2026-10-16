---
hide_table_of_contents: true
sidebar_position: 1
---

# About me

<img className="about-photo" src={require('@site/static/img/clara.jpg').default} alt="Clara Christopher in a pink T-shirt, beside a painting" />

My name is Clara, and I've spent my career writing for networking, application, and cloud security startups. That means a lot of explaining things you can't see (traffic, tunnels, encryption) to people who have to make decisions about them.

The world I write about is incredibly abstract, so I like to make it concrete by directly using the-thing-itself. What actually happens when I push a button and a VPN turns on? I start with the fundamentals, the most basic building blocks of the technology, before I get into its more nuanced layers. And that's just the beginning of my work.

The next part is building a vivid sense of the person using it. Who are they? What are they trying to do? Does what feels unintuitive to me feel unintuitive to them, too?

You're not supposed to say this these days, since the hero of our times is the technical specialist, but I'm a creative at heart. I like to expand outward and synthesize. You have to think and feel outside of the box, sense how to reach people and relate to them, and then finally reflect back something that flows meaningfully and grounds people in their own world. In many ways, it's better to see a complex technology with naive eyes, as an outsider, because that's usually closer to where your user is standing. So I stand by this: A specialist knows how the thing works, but it takes a generalist to make it matter to anyone else.

Today I own the Cloud Secure Edge docs at SonicWall. I started as the only technical writer at Banyan Security and stayed on through the acquisition. Before that, I wrote docs for [Tailscale](https://tailscale.com/kb) and technical content for [Security Compass](https://www.securitycompass.com/).

If you're building something complicated and want people to enjoy using it, [I'd love to hear about it](/contact).

## How I work

<div className="ts-steps">

1. **I learn the product before I write about it.** If I can't set it up myself, I can't explain it to someone who has to.
2. **If a screen needs a doc to explain it, I fix the screen first.** The best help text is the help text nobody needs.
3. **Structure is content.** Where something lives tells readers what it is. Put an install guide under "Learn", and nobody will find it.
4. **Tools report, people decide.** I automate the tedious parts of keeping docs accurate, and I keep the judgment calls.

</div>


I'm open to roles like these:

<p className="ia-chips role-chips"><span>Technical writer</span><span>Content designer</span><span>Content strategist</span><span>Content engineer</span></p>

import {HubGroup, HubCard} from '@site/src/components/Hub';

<HubGroup label="What's here" columns={2}>
  <HubCard to="/published-cse-docs" icon="file" tag="Docs" title="Docs" go="See the pages">
    Live pages I write and maintain.
  </HubCard>
  <HubCard to="/content-design/overview" icon="pen" tag="In-product" title="Content design" go="See the samples">
    The words in the product, and the order people see them in.
  </HubCard>
  <HubCard to="/content-architecture" icon="layers" tag="Structure" title="Content architecture" go="See the work">
    How docs are organized, and why that matters more than it sounds.
  </HubCard>
  <HubCard to="/automations" icon="bot" tag="Tooling" title="Automations" go="See the tools">
    Two tools that catch docs drifting out of date.
  </HubCard>
</HubGroup>
