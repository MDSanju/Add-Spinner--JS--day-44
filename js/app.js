const doSearch = () => {
    togglePreloadSpinner('block');
    toggleResultsHideWileSpinning('none');
    const searchText = document.getElementById('search-field');
    const text = searchText.value;
    searchText.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(res => res.json())
        .then(data => displayResult(data.meals))
}

const togglePreloadSpinner = displaySpinner => {
    document.getElementById('perloader').style.display = displaySpinner;
}

const toggleResultsHideWileSpinning = hideResults => {
    document.getElementById('items').style.display = hideResults;
}

const displayResult = meals => {
    const parentId = document.getElementById('items');
    parentId.textContent = '';
    meals.forEach(meal => {
        const p = document.createElement('p');
        p.innerHTML = `</br>This is ${meal.strMeal} food!
        <p>${meal.strIngredient18?meal.strIngredient18 : ''}</p></br>
        `;
        parentId.appendChild(p);
    });
    togglePreloadSpinner('none');
    toggleResultsHideWileSpinning('block');
}