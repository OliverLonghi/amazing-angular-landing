import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  template: `
    <header>
      <logo></logo>
      <menu></menu>
    </header>

    <big-hero image="./assets/images/office.jpg">
      <headline white>We’re an App Design & Development Team</headline>
      <legend grey italic>Experts in mobile & web technologies. We create beautiful, functional mobile apps and websites.</legend>
      <btn>Click me</btn>
    </big-hero>

    <content-section>
      <headline black>Trusted by clients across 8 countries</headline>
      <clients>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
        <client image="./assets/images/client.png"></client>
      </clients>
    </content-section>

    <content-section [image]="'./assets/images/content-section2.jpg'">
      <headline white>Let’s Build A Better Product Together</headline>
      <legend white italic>Our team of experienced designers and engineers have partnered with several startups and businesses. For over 10 years, we’ve shipped software and continuously evolved our skills to meet the needs of our partners. From open-source to licensed enterprise tools, we stay sharp.</legend>
      <btn>Click me</btn>
      <subtitle white>Our students come from the smartest companies</subtitle>
    </content-section>

    <content-section>
      <headline black>Let’s Build A Better Product Together</headline>
      <legend black italic>Our team of experienced designers and engineers have partnered with several startups and businesses. For over 10 years, we’ve shipped software and continuously evolved our skills to meet the needs of our partners. From open-source to licensed enterprise tools, we stay sharp.</legend>
      <br/>
      <br/>
      <br/>
      <cards>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
        <a><card image="./assets/images/card.jpg" legend="Brazil" subtitle="Brasil"></card></a>
      </cards>
      <btn color='#e73536' inverted_color='#fff'>See other projects</btn>
    </content-section>

    <footer>
      <logo></logo>
      <subtitle>Oliver Longhi 2019</subtitle>
    </footer>
  `,
  styles: []
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
