const precios = [
    {
        titulo: "Free",
        descripcion: "Find aute inure dolor in reprehenderit in volatek",
        divisa: "$",
        precio: 0,
        features: [
            "Up to 3 projects for each member",
            "2 team members allowed"
        ]
    },
    {
        titulo: "Standard",
        descripcion: "Find aute inure dolor in reprehenderit in volatek",
        divisa: "$",
        precio: 15,
        features: [
            "Unlimited number of projects",
            "Up to 5 team members",
            "24/7 support",
            "Up to 30GB storage space"
        ]
    }
]

function cambiarMetodo() {
    let toggleSwitch = document.getElementById("toggleSwitch")

    if (toggleSwitch.checked) {
        for (let i = 0; i < precios.length; i++) {
            console.log(i)
            let mainDiv = document.getElementById(i)
            document.getElementById("divisa" + i).remove()
            document.getElementById("precio" + i).remove()
            document.getElementById("pormes" + i).remove()

            //divisa
            h1 = document.createElement("p");
            tn = document.createTextNode(precios[i]["divisa"]);
            h1.className = "divisa"
            h1.id = "divisa" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)

            //precio
            h1 = document.createElement("p");
            tn = document.createTextNode(precios[i]["precio"]);
            h1.className = "precio"
            h1.id = "precio" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)

            //por mes
            h1 = document.createElement("p");
            tn = document.createTextNode("per month");
            h1.className = "pormes"
            h1.id = "pormes" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)
        }
        console.log("mensual")
    } else {
        for (let i = 0; i < precios.length; i++) {
            console.log(i)
            let mainDiv = document.getElementById(i)
            document.getElementById("divisa" + i).remove()
            document.getElementById("precio" + i).remove()
            document.getElementById("pormes" + i).remove()

            //divisa
            h1 = document.createElement("p");
            tn = document.createTextNode(precios[i]["divisa"]);
            h1.className = "divisa"
            h1.id = "divisa" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)

            //precio
            h1 = document.createElement("p");
            tn = document.createTextNode(precios[i]["precio"] * 12);
            h1.className = "precio"
            h1.id = "precio" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)

            //por mes
            h1 = document.createElement("p");
            tn = document.createTextNode("per year");
            h1.className = "pormes"
            h1.id = "pormes" + i
            h1.appendChild(tn)
            mainDiv.appendChild(h1)
        }
        console.log("anual")
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const mainDiv = document.getElementById("addPrices")
    for (let i = 0; i < precios.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "opcion"
        if (i != 0) {
            newDiv.id = "separador"
        }

        //--IZQUIERDA--\\
        const divIzquierda = document.createElement("div");
        divIzquierda.className = "izquierda"

        //titulo
        let h1 = document.createElement("h1");
        let tn = document.createTextNode(precios[i]["titulo"]);
        h1.appendChild(tn)
        divIzquierda.appendChild(h1)

        //descripcion
        h1 = document.createElement("p");
        tn = document.createTextNode(precios[i]["descripcion"]);
        h1.appendChild(tn);
        divIzquierda.appendChild(h1)

        //--CENTRO--\\
        const divCentro = document.createElement("div");
        divCentro.className = "medio"
        divCentro.id = i

        //divisa
        h1 = document.createElement("p");
        tn = document.createTextNode(precios[i]["divisa"]);
        h1.className = "divisa"
        h1.id = "divisa" + i
        h1.appendChild(tn)
        divCentro.appendChild(h1)

        //precio
        h1 = document.createElement("p");
        tn = document.createTextNode(precios[i]["precio"]);
        h1.className = "precio"
        h1.id = "precio" + i
        h1.appendChild(tn)
        divCentro.appendChild(h1)

        //por mes
        h1 = document.createElement("p");
        tn = document.createTextNode("per month");
        h1.className = "pormes"
        h1.id = "pormes" + i
        h1.appendChild(tn)
        divCentro.appendChild(h1)

        //--DERECHA--\\
        const divDerecha = document.createElement("div");
        divDerecha.className = "derecha"

        //features
        for (let x = 0; x < precios[i]["features"].length; x++) {
            h1 = document.createElement("p");
            tn = document.createTextNode(precios[i]["features"][x]);

            //icono
            let icono = document.createElement("i");
            icono.className = "fa-solid fa-check"

            h1.appendChild(icono)
            h1.appendChild(tn)

            tn = document.createTextNode(icono)

            divDerecha.appendChild(h1)
        }

        newDiv.appendChild(divIzquierda);
        newDiv.appendChild(divCentro);
        newDiv.appendChild(divDerecha);
        mainDiv.appendChild(newDiv);
    }
    cambiarMetodo()
})