let select = document.querySelector('.select select')
selectOptions()

function selectOptions() {
  var voicelist = responsiveVoice.getVoices()
  voicelist.forEach((voice) => {
    select.innerHTML += `
    <option value="${voice.name}">${voice.name}</option>
    `
  })
}
let textArea = document.querySelector('textarea')
let btnVoice = document.querySelector('.btn')
select.addEventListener('change', (e) => {
  responsiveVoice.setDefaultVoice(select.value)
})
btnVoice.addEventListener('click', function () {
  let text = textArea.value
  responsiveVoice.speak(text)
  this.classList.add('active')
  setTimeout(() => {
    this.classList.remove('active')
  }, 3000)
})
