export default function MenuBar({ isOpen, onClose }) {
  const handleClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <div id="menu-bar" style={{ transform: isOpen ? 'translate(0px, 0px)' : 'translate(-100%, 0px)' }}>
      <i className="ri-close-large-line cross" onClick={onClose}></i>
      <a href="#home" onClick={handleClick}>Home</a>
      <a href="#secondpage" onClick={handleClick}>Clinik</a>
      <a href="#thirdpage" onClick={handleClick}>Service</a>
      <a href="#fourthpage" onClick={handleClick}>Tech</a>
      <a href="#fifthpage" onClick={handleClick}>Review</a>
      <a href="#foot" onClick={handleClick}>Book / Contacts</a>
    </div>
  )
}
