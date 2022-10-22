const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
const domain = params.domain;
const subDomain = params.subdomain;

const beginnerResourceBox = document.getElementById("beginnerResourceBox");
const intermediateResourceBox = document.getElementById(
  "intermediateResourceBox"
);
const advancedResourceBox = document.getElementById("advancedResourceBox");
const projectsResourceBox = document.getElementById("projectsResourceBox");
let beginnerData;
let intermediateData;
let advancedData;

const addBeginnerResources = () => {
  if (beginnerData != "") {
    for (let i = 0; i < beginnerData.length; i++) {
      if (beginnerData[i].type == "docs") {
        beginnerResourceBox.innerHTML += ` 
        <div class="col-6 col-md-4">
        <div class="card m-3" style="width: 100%">
        <img
        src="./assets/images/explore.jpg"
        class="card-img-top img-sz mx-auto"
        alt="..."
        />
        <div class="card-body text-center">
        <h5 class="card-title">${beginnerData[i].title}</h5>
        <a href="${beginnerData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
        </div>
        </div>
        </div>`;
      } else {
        beginnerResourceBox.innerHTML += `
        <div class="col-6 col-md-4">
        <div class="card m-3" style="width: 100%">
        <img
        src="./assets/images/content.png"
        class="card-img-top img-sz mx-auto"
        alt="..."
        />
        <div class="card-body text-center">
        <h5 class="card-title">${beginnerData[i].title}</h5>
        <a href="${beginnerData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
        </div>
        </div>
        </div>`;
      }
    }
  } else {
    beginnerResourceBox.innerHTML += `<img
            src="./assets/images/empty.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />`;
  }
};

const addIntermediateResources = () => {
  if (intermediateData != "") {
    for (let i = 0; i < intermediateData.length; i++) {
      if (intermediateData[i].type == "docs") {
        intermediateResourceBox.innerHTML += `
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/explore.jpg"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${intermediateData[i].title}</h5>
          <a href="${intermediateData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
      } else {
        intermediateResourceBox.innerHTML += `
        <div class="col-6 col-md-4">
        <div class="card m-3" style="width: 100%">
        <img
        src="./assets/images/content.png"
        class="card-img-top img-sz mx-auto"
        alt="..."
        />
        <div class="card-body text-center">
        <h5 class="card-title">${intermediateData[i].title}</h5>
        <a href="${intermediateData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
        </div>
        </div>
        </div>`;
      }
    }
  } else {
    intermediateResourceBox.innerHTML += `<img
            src="./assets/images/empty.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />`;
  }
};

const addAdvancedResources = () => {
  if (advancedData != "") {
    for (let i = 0; i < advancedData.length; i++) {
      if (advancedData[i].type == "docs") {
        advancedResourceBox.innerHTML += `
        <div class="col-6 col-md-4">
        <div class="card m-3" style="width: 100%">
        <img
        src="./assets/images/explore.jpg"
        class="card-img-top img-sz mx-auto"
        alt="..."
        />
        <div class="card-body text-center">
        <h5 class="card-title">${advancedData[i].title}</h5>
        <a href="${advancedData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
        </div>
        </div>
        </div>`;
      } else {
        advancedResourceBox.innerHTML += `
        <div class="col-6 col-md-4">
        <div class="card m-3" style="width: 100%">
        <img
        src="./assets/images/content.png"
        class="card-img-top img-sz mx-auto"
        alt="..."
        />
        <div class="card-body text-center">
        <h5 class="card-title">${advancedData[i].title}</h5>
        <a href="${advancedData[i].link}" class="btn view-more-btn" target="_blank">View More</a>
        </div>
        </div>
        </div>`;
      }
    }
  } else {
    advancedResourceBox.innerHTML += `<img
            src="./assets/images/empty.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />`;
  }
};

const fetchResources = async () => {
  try {
    // Beginner
    const beginner = await fetch(
      `./data/domains/${domain}/${subDomain}/beginner.json`
    );
    beginnerData = await beginner.json();
    addBeginnerResources();
    // Intermediate
    const intermediate = await fetch(
      `./data/domains/${domain}/${subDomain}/intermediate.json`
    );
    intermediateData = await intermediate.json();
    addIntermediateResources();
    // Advanced
    const advanced = await fetch(
      `./data/domains/${domain}/${subDomain}/advanced.json`
    );
    advancedData = await advanced.json();
    addAdvancedResources();
  } catch (e) {
    throw new Error(e);
  }
};

fetchResources();
