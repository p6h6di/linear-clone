import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Linear Method", href: "#" },
      { label: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Community", href: "#" },
      { label: "Contact", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white-a08 py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
              <Logo className="mr-4 h-4 w-4" /> Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label} className="[&_a]:last:mb-0">
                    <Link
                      className="mb-3 block text-grey transition-colors hover:text-off-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
