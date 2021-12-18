const planets = document.querySelectorAll('.planeta')
const p_radii = [22,33,50,70,112,138,165,190]
let p_radians = new Array(8).fill(0)
const p_velocities = [1.607, 1.174,1,0.802, 0.434, 0.323, 0.228, 0.182]

const lua = document.querySelector('#lua')
const m_radius = 8
let m_radians = 0
const m_velocity = 10

const p_orbits = document.querySelectorAll('.p-orbita')
const orbita = document.querySelector('#orbita')

p_orbits.forEach((p_orbita, index)=>{
  p_orbita.style.height = `${p_radii[index]}vmin`
  p_orbita.style.width = `${p_radii[index]}vmin`
})

setInterval( ()=> {
  planets.forEach( (planeta, index)=>{
    planeta.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
    planeta.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
    p_radians[index] += p_velocities[index] * 0.02
  })

  lua.style.left = `${earthX() + (Math.cos(m_radians) * m_radius )}vmin`
  lua.style.top = `${earthY() + (Math.sin(m_radians) * m_radius )}vmin`
  m_radians += m_velocity * 0.02

  orbita.style.left = `${earthX()}vmin`
  orbita.style.top = `${earthY()}vmin`
}, 1000/60)

function earthX(){
  return Number( planets[2].style.left.split('vmin')[0] )
}

function earthY(){
  return Number( planets[2].style.top.split('vmin')[0] )
}