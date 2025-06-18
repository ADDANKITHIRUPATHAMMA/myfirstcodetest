 function updateOptions() {
      const radios = document.getElementsByName("unit");
      let total = "$0.00 USD";
      let showOneUnitOptions = false;
       let showTwoUnitOptions = false;
        let showThreeUnitOptions = false;
      

      for (let radio of radios) {
        if (radio.checked) {
          switch (radio.value) {
            case "1":
              total = "$10.00 USD";
              showOneUnitOptions = true;
              break;
            case "2":
              total = "$18.00 USD";
              showTwoUnitOptions = true;
              break;
            case "3":
              total = "$24.00 USD";
              showThreeUnitOptions = true;
              break;
          }
        }
      }

      document.getElementById("totalAmount").innerText = total;
      document.getElementById("oneUnitOptions").style.display = showOneUnitOptions ? "block" : "none";
    document.getElementById("twoUnitOptions").style.display = showTwoUnitOptions ? "block" : "none";
     document.getElementById("threeUnitOptions").style.display = showThreeUnitOptions ? "block" : "none";
    }

    // Initialize
    updateOptions();