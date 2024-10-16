---
id: 'cdt20241014'
title: 'Are we open source?'
description: 'Looking at definitions of open source and open core we consider where Codort sits and our journey to get there.'
date: '2024-10-14'
cover: 'covers/cody.png'
tags:
  - 'blog'
hidden: false
draft: false
listed: true
---

There are many companies that call themselves 'open source' or 'open core', even if they're not.
We take a look at these descriptions, situate ourselves among them and then describe the motivations and process to make our repositories open source.

### Open source and open core

Let's start with some definitions.
Originally, the term 'open source' referred to software released under open-source licenses, which are licenses that waive many of the restrictions of copyright, allowing users to use, copy, modify, and redistribute underlying source code for free.

A company cannot be 'open source', although some companies may self-describe themselves in that way if they release _all_ their code under open-source licenses.
[Red Hat](https://www.redhat.com/) is sometimes referred to as an 'open source company' as they are radically transparent, have a flat internal hierarchy, and the software they produce is all open source.
Red Hat makes money by selling training and consulting, as well as enterprise versions of open-source products.

'Open core' refers to a business model where a company releases their core code under an open-source license but keeps a portion of the code 'closed-source' under proprietary licenses.
[GitLab](https://gitlab.com) is a prominent example of an open core company. The GitLab platform is free to use and the [source code](https://gitlab.com/gitlab-org/gitlab) is readily available for you to use, copy, or even redistribute.

### How open is Codort?

Codort has some [open-source repositories](https://github.com/Codort) but we are **not** open core and we will never pretend to be.
We believe that companies should make their code as open as possible as there are huge benefits both to the company and other developers.
You can see the benefits to contributors in our [contributing guide](https://github.com/Codort/website/blob/main/CONTRIBUTING.md).
For companies, we see three big benefits:

1. "Given enough eyeballs, all bugs are shallow". This assertion made by Eric S. Raymond in [_The Cathedral and the Bazaar_](http://www.catb.org/~esr/writings/cathedral-bazaar/) means that with enough contributors, every problem should be detected and fixed _relatively_ quickly. It's an open question if this holds true (though there's [some evidence](https://arxiv.org/abs/2007.10912) for it) but we definitely believe in it. We also know that for bugs that are already shallow, the time to fix them is quicker if our code is open. Have you ever found an app or website was broken, or maybe there was just a typo, and you knew you could fix it but weren't able to because the code was close-source? By making parts of our code open, we are giving our community the chance to fix bugs straight away, skipping the need to open tickets for easy fixes and wasting developer time that could be better spent elsewhere.
2. Open source is better for the environment. As stated by the authors of [_Building Green Software_](https://www.oreilly.com/library/view/building-green-software/9781098150617/), reusing code means that developers can avoid needlessly burning carbon by writing and testing new code.
3. Open source leads to happier and prouder developers. Open-source code is more likely to be [endorsed by developers](https://survey.stackoverflow.co/2024/work/#4-tech-endorsement-factors) and contributes to [positive job satisfaction](https://survey.stackoverflow.co/2024/professional-developers/#3-factors-that-most-contribute-to-job-satisfaction).

### Becoming open

Even though we are huge open source advocates, we won't pretend it's super easy to have open repositories.
For us to make just one repository open we had to consider:

1. Which license to use
2. Whether to use a DCO or CLA
3. How to write our code of conduct
4. What to include in our contribution guidelines
5. Where to host and grow our community
6. How to support and recognise our community

We won't go into all these details now but if you're interested below are the choices we made with our justification.
If any of these topics are of interest, let us know and we will write a longer blog post in the future.

**Licensing**

We knew we wanted to use a permissive licence that places the minimum restrictions on developers.
As we are not open-sourcing any code that might be commercially sensitive, there was no benefit in using licenses with more restrictions such as copyleft licences.
When choosing between licences, we considered MIT, Apache 2.0, and BSD+Patent.
We opted for Apache 2.0 as it was the most popular permissive licence that has required clauses around trademark and patent rights.
Apache 2.0 can be frustrating to use as many developers and companies forget to attach a separate NOTICE file and often don't attach licence headers.
To make this as simple as possible, we have a short NOTICE file in the root of our directory which provides copyright information, and we have simplified headers in all our source code to remind contributors that we use Apache 2.0 everywhere.

**DCO vs CLA**

A Contributor Licence Agreement (CLA) is an agreement that primarily governs how IP is shared between contributors and the project they contributed to.
CLAs can be quite popular in companies as they provide the organisation with more control over future re-licensing decisions.
At Codort, we are quite suspicious of CLAs because they can, and often are, used to 'rugpull', which in this context means changing the code licence from open-source to closed-source.
If someone contributes code to our platform for free, with the intention of that code being used for free, then we believe any change to that implicit agreement is unfair and exploitative.
For this reason we do not use CLAs, moreover we have [publicly pledged](https://github.com/Codort/website/blob/main/CONTRIBUTING.md#the-mutual-benefits-of-open-source) never to relicense our open-source code with closed-source licences.

Instead of CLAs, we ask all contributors to sign the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).
The DCO is a document that simply states that the contributor has the right to submit their contribution.
A contributor signs the DCO by signing-off their git commit to Codort, unsigned commits will be rejected and violations lead to contributors being permanently banned.

**Code of conduct**

This was an easy one for us, we simply used the [Contributor Covenant](https://www.contributor-covenant.org/) which is adopted by many open source projects.
The covenant is easy to read and understand, and clearly outlines our enforcement responsibilities.
In the future we will update the covenant to include guidelines for anonymous reporting.

**Contribution guidelines**

Contribution guidelines tell contributors _how_ to contribute to your repository.
They are strongly recommended as they ensure code is submitted efficiently.
However, they are also useful to make contributors feel comfortable submitting to your repository.
Just because software is open source, that doesn't mean someone will feel _comfortable_ submitting.
Contribution guidelines, and READMEs, are a great place to include short messages to your community telling them that this is a safe space to make contributions.
Our guidelines also state how we use our DCO and how we recognise our community contributions.

**Our community**

There are many platforms for working with open-source communities, and we hope Codort will help consolidate some of these platforms in the future.
For now, we decided to use Discord to communicate with our community as we recognise it's a platform preferred by developers worldwide.
In particular, Discord offers _a lot_ for free, including a huge marketplace of bots that can be very powerful for community management and moderation.
To grow our community, we are partnering with open-source organisations who can help us find community contributors and understand community needs so we can best support them.
Paying individual open-source contributors is very difficult as crediting contributions is difficult but also monetisation can quickly lead to low-quality contributions (google 'Hacktoberfest').
Working with community partners allows us to donate to single organisations who can then give out funds in a way that best meets community needs, which differs across the world.
In the future we hope to run a rewards program whereby our community can nominate someone each month to receive a small voucher or gift card to recognise their contributions (whether in the form of code, documentation, ideas, mentoring, or otherwise).
Finally, we are currently using [All Contributions](https://allcontributors.org/) which is a bot that allows us to easily credit any contributor to our codebase, whether that's for code, documentation, translations, blogs, accessibility, or more.

### Developer survey

If you've made it this far and can spare another five minutes, we are running a survey to understand how code management impacts the developer experience.
If you are a developer, [please consider taking our survey](go.codort.com/tools-survey).
