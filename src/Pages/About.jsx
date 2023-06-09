import React from "react";

export default function About() {
    return (
        <div>
            <h1 className="mb-6">About Me</h1>
            <p>
                As a Blockchain developer, I have extensive experience in
                designing, developing, and deploying smart contracts on various
                EVM compatible blockchains. I possess a strong understanding of
                EVM, various tools, libraries, and frameworks used in smart
                contract development. Additionally, I am proficient in writing
                efficient and secure Solidity code, performing code reviews, and
                implementing testing methodologies. I am passionate about
                blockchain technology and constantly strive to learn and
                implement new advancements in the field.
            </p>
            <p>
                With an eye for detail and a commitment to quality, I approach
                every project with a problem-solving mindset. Whether it's
                developing decentralized finance (DeFi) protocols, creating
                supply chain solutions, or implementing identity verification
                systems, I strive to leverage the potential of blockchain to
                create efficient, transparent, and secure solutions. With a
                strong understanding of cryptography and consensus algorithms, I
                ensure that the systems I build are resilient against attacks
                and provide a seamless user experience.
            </p>
            <p>
                I am not only passionate about writing code but also about
                driving the adoption of this groundbreaking technology. I stay
                up-to-date with the latest trends and advancements in the
                blockchain space, attending conferences and actively
                participating in blockchain communities. I believe in the
                democratizing nature of blockchain technology and its potential
                to revolutionize industries, and I am excited to be part of this
                transformative journey as a skilled and dedicated blockchain
                developer.
            </p>
            <div className="mt-12 space-x-3">
                <a
                    href="/resume.pdf"
                    download
                    className="inline-block bg-accent bg-opacity-10 font-medium text-accent p-3 rounded-lg duration-200 hover:bg-accent hover:text-white"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}
