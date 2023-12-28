const totalCategories = document.querySelectorAll('.item')
console.log('Number of categories:', totalCategories.length)

totalCategories.forEach(item => {
    const titleItem = item.firstElementChild.textContent
    const elementsItem = item.lastElementChild.children.length
    console.log('Category:', titleItem)
    console.log('🚀 Elements', elementsItem)
    
})