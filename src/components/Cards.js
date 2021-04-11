import React from "react";
import Pic1 from "../../src/components/assets/1.svg";

function Cards() {
  return (
    <div>
      <section id="description-section">
        <div id="go-here" class="container-fluid">
          <h1>One-platform for all your goals.</h1>
          <br />
          <br />
          <br />
          <p>
            Earned your credits? Awesome! <br />
            But did you know they are a global currency totally independent from
            any other? Become a part of the global community and join others who
            wish to create a clean and green future just like you. Share and
            exchange your Carbon Credits and get all the kind of resources,
            donate it to the underpriviledged and help the mankind to drift
            towards globalisation Together we can make sustainable living a
            beautiful reality.
          </p>
          <br />
          <br />
          <br />

          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-calendar-check fa-2x"></i>
                  </p>

                  <h5 style={{ fontWeight: "bolder" }}>Earn</h5>
                  <p class="card-text">
                    Reduce the carbon emission on your side and Earn your Carbon
                    Credits for that courtesy. Login to your account to check
                    your carbon credits. You can exchange this Carbon Credits
                    for monetary value in your local currency. You can exchange
                    it for resources and can also donate it globally to
                    charities.
                  </p>
                  <a href="resources.html">
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-shopping-cart fa-2x"></i>
                  </p>
                  <h5 style={{ fontWeight: "bolder" }}>Donate</h5>
                  <p class="card-text">
                    Do you desire to help people suffering due to the pandemic?
                    Are you interested in supporting a good cause? Futuriste
                    gives you an oppurtunity to donate in the most
                    environment-friendly and ecological way, a chance to save
                    the people and save the world together in a few clicks.
                  </p>
                  <a href="#">
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-search fa-2x"></i>
                  </p>
                  <h5 style={{ fontWeight: "bolder" }}>Resources</h5>
                  <p class="card-text">
                    Exchange your Carbon Credits for all kind resources. For
                    example, you can get scholarships in exchange of CCs. You
                    can get recruited for jobs in environment centric
                    NGOs/charities. You can enroll yourself in online courses
                    and vocational training courses in exchange of your CCs.
                  </p>
                  <a href="#">
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-coins fa-2x"></i>
                  </p>
                  <h5 style={{ fontWeight: "bolder" }}>Epidemic</h5>
                  <p class="card-text">
                    As we're facing this pandemic, help those who are
                    underpriviledged, talk to them, read their experiences.
                    Donate directly to WHO by your CCs. Get live updates, check
                    the global index graphically, with countries data
                    individually.
                  </p>
                  <a>
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-hand-holding-medical fa-2x"></i>
                  </p>
                  <h5 style={{ fontWeight: "bolder" }}>CCExchange</h5>
                  <p class="card-text">
                    As Carbon Credits a decentralised way of money exchange, you
                    can exchange your credits for actual money in your local
                    currency. You can check the exchange value and the exchange
                    rate. Get the money directly credited to your bank account .
                  </p>
                  <a href="#">
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body">
                  <p>
                    <i class="fas fa-leaf fa-2x"></i>
                  </p>
                  <h5 style={{ fontWeight: "bolder" }}>Save the Nature</h5>
                  <p class="card-text">
                    By using this decentralised currency, not only are you
                    saving the environment, but also being the part of global
                    cause by donating your credits. This way we can keep a check
                    on our Carbon Dioxide emissions and can move towards
                    Sustainability.
                  </p>
                  <a href="#">
                    <button class="btn btn-lg description-cta">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 style={{ color: "#00917c" }}>Help Build the Community with us!</h1>
        <br />
        <br />
      </section>
    </div>
  );
}

export default Cards;
