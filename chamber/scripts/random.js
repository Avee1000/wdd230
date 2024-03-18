const url = "https://avee1000.github.io/wdd230/chamber/data/members.json";

const spotlight = document.getElementById("spot-ad");

async function getRanMembersData(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayRanMembers(data.companies);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getRanMembersData();

function displayRanMembers(companies) {

    const needed = [];

    companies.forEach((company) => {

        if (company.memberLevel == "Gold" || company.memberLevel == "Silver") {
            needed.push(company); 
        }
    });

    needed.forEach((x) => {
        const article = document.createElement("article");

        const name = document.createElement("h3");
        name.innerHTML = `${x.name}`;

        article.appendChild(name);
    });
 }
