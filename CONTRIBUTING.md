# Contributing to Codort

- [The mutual benefits of open source](#the-mutual-benefits-of-open-source)
- [Developer Certificate of Origin](#developer-certificate-of-origin)
- [All Contributors](#all-contributors)

## The mutual benefits of open source

### Why have we open-sourced some of our code?

1. :heart: We love open source. We love the community and the potential for rapid, technical advancement. So making our code as open as possible just made sense.
2. :eyes::bug: ["given enough eyeballs, all bugs are shallow"](http://www.catb.org/~esr/writings/cathedral-bazaar/). Whether ["Linus's Law"](https://en.wikipedia.org/wiki/Linus%27s_law) is strictly true or not, we believe in it. We don't want you or anyone else using a broken website and if it is broken then we believe a community of contributors _may_ find bugs quicker than our internal team. By making our code open we can speed up our bug fix rate.
3. :earth_asia: Open-source is [environmentally friendly](https://www.oreilly.com/library/view/building-green-software/9781098150617/). Reusing code and not wasting developer time or computational resources on rewriting the same code is actually better for the environment.

We are a for-profit company, motivated to create profit from our codebase, so we understand we have to _earn_ your trust. This is **our pledge to you**:

<div style="color:orange; padding: 0px 20px;">
If you submit code under an open-source license, it will always and forever be open source. We we will never relicense open-source code you provide under a proprietary license. We will always consult our community about any changes to open-source licenses or community documentation such as our code of conduct.
</div>

### Why should someone contribute _for free_ to the code of a for-profit company?!

:elephant: It's the elephant in the room so let's acknowledge it straight away.
We are incredibly grateful for contributions in any form but gratitude won't get you very far; below are a few reasons why you might consider contributing to our project.

1. :trophy: **Recognition**. We recognise _all_ contributors to our code, anything from writing new code to fixing typos in documentation, helping think through new ideas, translating pages, or more. We use [all contributors](#all-contributors) so your profile will stand out on our home page for all to see. Over time we hope to include a rewards program for the community to nominate a monthly contributor to receive a small reward (enough to cover a coffee).
2. :briefcase: **Add to your CV**. We would _never_ guarantee that contributing to open source will help you get a job. When we hire developers we always ask for a link to their GitHub or other developer profile. Public coding contributions _may_ help you stand out from other candidates but perhaps more importantly, open source is an efficient way to learn something new...
3. :microscope: **Learn something new**. The best way to learn a new programming language is not by reading books but by actually working on projects. Open source is a safe space (or should be!) to learn something new. Start by reading other people's code, then make the smallest contribution yourself and build it up from there. Even fixing a typo can be empowering when you see it merged into the main branch.
4. :teacher: **Mentorship**. Open-source projects often have maintainers or contributors that can support you as a mentor. If you're new to open source, to a specific programming language, or to the project you're contributing to, reach out to a mentor for support. Mentors are a great way to learn something quicker and to meet new people. When you feel comfortable working in a project, consider becoming a mentor yourself to help others, it will feel great! You can recognise Codort mentors by their 'mentor' role in our Discord.
5. :people_hugging: **Community**. We think the best part of open source is the amazing community that has formed around it. It's not hard to join that community, just join our [Discord](https://discord.com/invite/nnBHHbMr23), say hi, and you're one of us. Make a small contribution and you're an open-source developer.
6. :woman_playing_handball: **Have fun**. Did you know that a [quarter of developers](https://survey.stackoverflow.co/2024/work/#5-coding-outside-of-work) contribute to open-source projects for fun outside work? Whether that's chatting to the community, mentoring someone, or just writing code as a hobby, we hope we can create an environment that is fun to be part of.
7. :toolbox: **Fix problems**. Have you ever been frustrated because there's a bug in your favourite app that took ages to fix? Even worse, you know _you_ could have fixed it but you didn't have access to the code! We want to remove that barrier; if you've found a bug that you know how to deal with, please consider solving it for both our saes! Don't 'do' open source [for the sake of it](https://dev.to/samuelfaure/what-contributing-to-open-source-is-and-what-it-isnt-148g), take part to solve problems for yourself and others.
8. :seedling: **Watch something grow**. We hope our platform will benefit developers worldwide and it's going to be an interesting (and difficult) journey to get there. Whether you're looking to start your own company or just want to see how we do, by being part of our community you'll have front-row seats as we grow!
9. :two_hearts: **Community support**. We are not going to pay our open-source contributors directly. It's too complicated to decide how to fairly attribute payment to contributors, moreover it isn't what open source is about. However, we \_will\* financially support our community partners who are able to more effectively financially support open source communities. If you think there's an open-source community we should be supporting let us know.

We have made a pledge to you and we ask for one in return. This is **your pledge to us**:

<div style="color:#ff6045; padding: 0px 20px;">
You will always adhere to our <a href="/CODE_OF_CONDUCT.md">code of conduct</a>. You will sign the developer certificate of origin for all commits that you make. You agree that if you violate our DCO then any associate commits will be removed and you will be permanently banned from contributing and from our Discord.
</div>

## Developer Certificate of Origin

All contributions to the Codort codebase must be signed-off to indicate you have read and agreed to the [Developer Certificate of Origin](https://developercertificate.org/) (DCO), which we have pasted below.
To sign the DCO, simply add `-s` after all commits that you make, to do this easily you can make a git alias from the command line, for example:

`$ git config --global alias.cos "commit -s"`

Will allow you to write `git cos` which will automatically sign-off your commit.
We have added a pre-commit hook that will amend the default sign-off to say:

`DCO signed and agreed by: {your name} <{your email}>`

In the near future we will add server-side push protections as well as better checks to prevent user spoofing user names and emails.

We consider the following as violations to the DCO:

1. Modifying the sign-off template above;
2. Signing the DCO with a fake name or pseudonym, if you are registered on GitHub or another platform with a fake name then you will not be able to contribute to Codort before updating your name;
3. Submitting a contribution that you did not have the right to submit whether due to licensing, copyright, or any other restrictions.

Any deliberate violation will result in a ban from contributing to Codort and from our Discord.

<details closed>
<summary><b>Click to toggle DCO text</b></summary>

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
have the right to submit it under the open source license
indicated in the file; or

(b) The contribution is based upon previous work that, to the best
of my knowledge, is covered under an appropriate open source
license and I have the right under that license to submit that
work with modifications, whether created in whole or in part
by me, under the same open source license (unless I am
permitted to submit under a different license), as indicated
in the file; or

(c) The contribution was provided directly to me by some other
person who certified (a), (b) or (c) and I have not modified
it.

(d) I understand and agree that this project and the contribution
are public and that a record of the contribution (including all
personal information I submit with it, including my sign-off) is
maintained indefinitely and may be redistributed consistent with
this project or the open source license(s) involved.
```

</details>

## All Contributors

We recognise contributions in all forms, code, documentation, bug reports, and anything else that helps support our open-source codebase.
To be recognised as a [contributor](CONTRIBUTORS.md), you can tag yourself using the [All Contributors bot](https://allcontributors.org/) as follows:

`@all-contributors please add @<username> for <contributions>`

Replacing `<username>` with your GitHub username and `<contributions>` with one of these [keys](https://allcontributors.org/docs/en/emoji-key).
Additional [details for usage can be found here](https://allcontributors.org/docs/en/bot/usage).
