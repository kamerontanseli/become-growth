---
author: Kameron Tanseli
date: '2021-01-30T11:48:22.947Z'
title: 'The Growth Mindset'
byline: ""
---

> What gets measured gets managed - Peter Drucker

## Relying on data to base decisions

A Growth Engineer's best weapon is data. Whether that be from running database queries to talking to customers, a Growth Engineer should be striving to collect as much data as possible in order to validate a hypothesis or diagnose an issue in the funnel.

A good Growth Engineer will be able to identify when a stakeholder gives an assumption rather than a point backed up by data. In an organization you'll encounter a lot of experts in their given field, however even experts tend to give assumptions which aren't backed up by data. It's your job to dispute assumptions and provide real answers using the data.

Here's a few of my favorite frameworks for research and experiments:

## The Five Whys

The Five Whys technique for finding the root cause of issues was developed by Sakichi Toyoda at Toyota. The technique is simple, you repeat the question "why?" around five times in order to dig down to the real cause of the issue by asking a different question each time.

Although five is in the name there are no hard rules on how many times you should keep digging. Furthermore, the outcome and success of this technique is also dependent on your knowledge of the topic you're investigating.

For example: The vehicle will not start.

1. Why? – _The battery is dead._
2. Why? – _The alternator is not functioning._
3. Why? – _The alternator belt has broken._
4. Why? – _The alternator belt was well beyond its useful service life and not replaced._
5. Why? – _The vehicle was not maintained according to the recommended service schedule. (root cause)_

The key here is to encourage the researcher to avoid assumptions and instead trace the chain of problems through layers of abstraction to the root cause of the issue. 

In the above example, asking why they did not maintain the vehicle may yield classic answers such as not enough time, money or manpower. Instead researchers should ask more specific questions such as why did the process for maintaining the vehicle fail?

A Growth Engineer would benefit from the above framework when talking to customers who often give vague answers to product questions.

For example: The customer cancelled their subscription.

1. Why did you cancel? - _I didn't find the product useful_.
2. Why wasn't it useful? - _I found the product too complex too use correctly._
3. What about the product is complex? - _Probably setting up the CSV integration._
4. What part of the CSV integration flow did you get stuck on? - _The part where you have to configure the delimiter thing._
5. What was confusing about setting up delimiters? - _My sheet had commas in the text but they weren't the delimiters and the integration couldn't process my CSV (root cause)._

## The Lean Startup Methodology

The Lean Startup by Eric Riess is a methodology for validating business models by shortening product development cycles and enabling rapid discovery. This is achieved through a combination of hypothesis driven experimentation, iterative product releases, and validating assumptions.

### Minimum Viable Product

The Minimum Viable Product (MVP) is often a term used to justify shipping a crappy product to customers. That is not the case. Your MVP should look and act as a finished product and contain the required features to validate your assumption.

Startups often use a landing page with an email form to validate their initial idea. I'm not a fan of this as it doesn't really give you much feedback. Instead I prefer to solve the market problem in the hackiest way possible, for example:

* Zappos founder Nick Swinmurn wanted to test the hypothesis that customers were ready and willing to buy shoes online. Instead of building a website and a large database of footwear, Swinmurn approached local shoe stores, took pictures of their inventory, posted the pictures online, bought the shoes from the stores at full price after he'd made a sale, and then shipped them directly to customers. 

* Airbnb started as a hacked together website to advertise the founder's house as available for the weekend. They got a whopping three paying guests to their house.

* Uber’s beta version (then referred to as ‘UberCab’) started as a simplified mobile interface only used by the founders and their friends. To gain access you had to email one of the founders.

* Dropbox didn't even build a product but instead filmed a short video which demoed their product’s first build, explained their core value proposition and demonstrated how easy it was for people to share files across their devices.

### Tracking Actionable Metrics

Actionable metrics are metrics that can lead to business decisions and action. Whereas vanity metrics give a positive outlook but seldom reflect the key drivers of the business model.

What is a vanity metric and what is an actionable metric depends on your business model. For example a SaaS company measuring page views is following a vanity metric as their revenue is based on engagement rather than page views. Whereas a blog with ads would view page views as an actionable metric as it directly affects their revenue.

A typical example of a vanity metric is "the number of new users gained per day". While a high number of users gained per day seems beneficial to any company, if the cost of acquiring each user through expensive advertising campaigns is significantly higher than the revenue gained per user, then gaining more users could quickly lead to bankruptcy.

A good way to find actionable metrics is to look at the "jobs to be done" on your platform. For example, at Motivii, we tracked the number of users who completed the weekly survey we sent them. This gave us an insight into what percentage of our users were actively using our platform every week.

### Build-Measure-Learn

![Build-Measure-Learn](/posts/2-the-growth-mindset-1.jpg)

The Build–Measure–Learn loop emphasizes speed as a critical ingredient to customer development. A startup's effectiveness is determined by its ability to ideate, build tests, measure results, and learn.

The Lean Process:

1. **Idea** - Starts by coming up with a hypothesis based on customer research or data analysis. 

2. **MVP** - Build a Minimum Viable Product in order to validate that hypothesis.

3. **Test** - Put that MVP in front of customers and learn from their feedback/interactions.

4. **Learn** - Using those learnings go back to step 1 and come up with ideas to improve the product.

Why is this important? A startup's effectiveness is determined by how fast they're able to learn from their customers. A Growth Engineer who can take an assumption, build a feature, and test it with customers will be able to validate and solve problems faster than a Customer Interviewer at Big Corp.

Another benefit from the Lean Startup approach is that you're able to quickly disprove an idea and cut losses without investing weeks of manpower. Disproving a hypothesis is as important as validating one because it means you can spend more time focusing on the real problems.