const images = [{
    source: "images/mountain.jpg",
    caption: "1. These are some beautiful mountains"
}, {
    source: "images/forest.jpg",
    caption: "2. This is a beautiful forest"
}, {
    source: "images/ocean.jpg",
    caption: "3. This is a beautiful ocean sunset"
}]

const sliderImage = document.querySelector("#slider-image")
const captionText = document.querySelector("#caption-text")

let imageIndex = 0

// Clicking arrow buttons functionality
document.querySelector("#right-arrow").addEventListener("click", function (e) {
    if (imageIndex === (images.length - 1)) {
        sliderImage.setAttribute("src", `${images[0].source}`)
        captionText.textContent = images[0].caption
        imageIndex = 0
    } else {
        imageIndex++
        sliderImage.setAttribute("src", `${images[imageIndex].source}`)
        captionText.textContent = images[imageIndex].caption
    }
    console.log(imageIndex)
})

document.querySelector("#left-arrow").addEventListener("click", function (e) {
    if (imageIndex === 0) {
        sliderImage.setAttribute("src", `${images[images.length - 1].source}`)
        captionText.textContent = images[images.length - 1].caption
        imageIndex = images.length - 1
    } else {
        imageIndex--
        sliderImage.setAttribute("src", `${images[imageIndex].source}`)
        captionText.textContent = images[imageIndex].caption
    }
    console.log(imageIndex)
})

// Keyboard arrow functionality
document.addEventListener("keydown", function (e) {
    keyCode = e.keyCode

    if (keyCode === 39) {
        if (imageIndex === (images.length - 1)) {
            sliderImage.setAttribute("src", `${images[0].source}`)
            captionText.textContent = images[0].caption
            imageIndex = 0
        } else {
            imageIndex++
            sliderImage.setAttribute("src", `${images[imageIndex].source}`)
            captionText.textContent = images[imageIndex].caption
        }
    } else if (keyCode === 37) {
        if (imageIndex === 0) {
            sliderImage.setAttribute("src", `${images[images.length - 1].source}`)
            captionText.textContent = images[images.length - 1].caption
            imageIndex = images.length - 1
        } else {
            imageIndex--
            sliderImage.setAttribute("src", `${images[imageIndex].source}`)
            captionText.textContent = images[imageIndex].caption
        }
    }
})