<!-- FAQ  Page -->
<template>
  <div>
    <h1 class='faq-headline'>FAQ - Frequently asked questions</h1>
    <div class='accordion' id='accordionExample'>

      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingOne'>
          <button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne'
                  aria-expanded='true' aria-controls='collapseOne'>
            What is cryptocurrency?
          </button>
        </h2>
        <div id='collapseOne' class='accordion-collapse collapse show' aria-labelledby='headingOne'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            The first and obvious addition among cryptocurrency FAQs would turn the emphasis towards definition of
            cryptocurrencies. Cryptocurrency is basically a digital form of currency with the support of cryptographic
            security for conducting trusted transactions. The underlying technology which runs cryptocurrencies is
            blockchain, and it offers a ledger for documenting all transactions. <br>
            As of now, you can find multiple cryptocurrencies in circulation, such as Bitcoin, Ether, and many new
            cryptocurrencies. The cryptocurrencies run as decentralized systems or networks without allowing complete
            control to a specific entity. Another important highlight of cryptocurrencies refers to the method for
            generating them. For example, miners could use their computing resources and electricity for mining
            cryptocurrency or stake their assets in a network for earning governance tokens.
          </div>
        </div>
      </div>


      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingTwo'>
          <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false' aria-controls='collapseTwo'>
            What is blockchain?
          </button>
        </h2>
        <div id='collapseTwo' class='accordion-collapse collapse' aria-labelledby='headingTwo'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            You could not find any list of cryptocurrency questions for beginners without the mention of blockchain.
            The first-ever cryptocurrency, Bitcoin, is the first successful implementation of blockchain in the real
            world. Blockchain technology is basically a transparent, publicly accessible, trustless, and secure ledger.
            <br>
            It helps in secure transfer of the ownership of units of value by leveraging proof of work consensus and
            public-key encryption methods. Blockchain leverages decentralized consensus for maintaining the network,
            thereby excluding intermediaries such as government, banks, or corporations from the process.
            <br>
            On top of it, the expansion of the blockchain network increases the level of decentralization, thereby
            strengthening security on blockchain. Interestingly, the capabilities of blockchain technology don’t focus
            on Bitcoin only and also extend to financial services, healthcare, and gaming.
          </div>
        </div>
      </div>


      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingThree'>
          <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                  data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
            What are the reasons for the popularity of cryptocurrencies?
          </button>
        </h2>
        <div id='collapseThree' class='accordion-collapse collapse' aria-labelledby='headingThree'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            The reasons for popularity of cryptocurrencies also set the foundation for some frequently asked questions
            about cryptocurrencies. Interestingly, you can find various reasons for the popularity of cryptocurrencies.
            One of the most common reasons for popularity of cryptocurrencies refers to the assumptions suggesting that
            cryptocurrencies are the currency of the future. In addition, cryptocurrencies also remove banks and other
            financial intermediaries from focusing on reducing the value of money.
            <br>
            Most important of all, the technology behind cryptocurrencies, i.e., blockchain, is the biggest draw for the
            future of crypto. Blockchain offers a decentralized system for processing and documenting transactions with
            better security in comparison to conventional payment systems. On top of it, the rising value of
            cryptocurrencies also encourages people to turn towards cryptocurrencies in large numbers.
          </div>
        </div>
      </div>


      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingFour'>
          <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                  data-bs-target='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
            Is it reasonable to invest in cryptocurrencies?
          </button>
        </h2>
        <div id='collapseFour' class='accordion-collapse collapse' aria-labelledby='headingFour'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            Investment in cryptocurrencies is also one of the notable highlights in cryptocurrency FAQs, especially for
            beginners. If you want to find whether cryptocurrencies are a good investment, then you should definitely
            know that they are volatile. Cryptocurrencies do not generate any cash flow like real currencies and are not
            stable. A currency should have stability which could help merchants and consumers in deciding the fair price
            for goods.
            <br>
            Bitcoin and many other popular cryptocurrencies have barely shown any sign of stability since their
            inception.
            For example, after rising to almost $20,000 in 2017, the value of Bitcoin dropped to almost $3200 in 2018.
            Now in 2021, Bitcoin has been successful in attaining record high levels. With price volatility as the main
            concern, it is quick to arrive at a conclusion about investments in cryptocurrency.
          </div>
        </div>
      </div>


      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingFive'>
          <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                  data-bs-target='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>
            How do i use the converter?
          </button>
        </h2>
        <div id='collapseFive' class='accordion-collapse collapse' aria-labelledby='headingFive'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            That's an easy question to answer: you simply select the currencies (FIAT or Crypto) you want to convert, and press the button below.
          </div>
        </div>
      </div>


      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingSix'>
          <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                  data-bs-target='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
            How can i create my own account?
          </button>
        </h2>
        <div id='collapseSix' class='accordion-collapse collapse' aria-labelledby='headingSix'
             data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            Please contact our admin-team at <a href="mailto:admin@ccr.crypto">admin@ccr.io</a>.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style scoped>
.accordion {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.faq-headline {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}
</style>
