

function ketaprocess(){

    const weight = document.getElementById('weight').value
    const loadingDoseRate = document.getElementById('loadingDoseRate').value
  
    const weightxdose = weight * loadingDoseRate
    console.log(weightxdose)
  
    const loadingDose = weightxdose / 100
    var roundednumber = (Math.round(loadingDose * 100) / 100).toFixed(2);
  
  document.getElementById('result1').innerHTML = "Ketamine loading dose = " + roundednumber + " ml"  
  }

function ketaSyrProcess(){
    const weight = document.getElementById('weight').value
    const criDuration = document.getElementById('criDuration').value
    const syringSize = document.getElementById('syringSize').value
    const ketamine = document.getElementById('ketamine').value
    // const loaD = document.getElementById('loaD').value
    // const drugConcentration = document.getElementById('drugConcentration')
    // const drugCon = drugConcentration.value

    const finDelRate = syringSize / criDuration;
    const totDrug = (weight * criDuration) * ketamine;
    const ketaTotVol = totDrug / 100;
    const addSal = syringSize - ketaTotVol;
    // const loadDose = (weight * loaD) / 100;
    // const loadingDose = loadDose / ketamine

document.getElementById('result').innerHTML = "<h3>Total volume = " + ketaTotVol.toFixed(2) + " ml</h3> <br>" +
"Add " + addSal.toFixed(2) + " ml of saline to fill the syringe <br>" +
"Final delivery rate = " + finDelRate.toFixed(2) + " ml/hr"
}

