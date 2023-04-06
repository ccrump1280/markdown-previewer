import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {

    const handleExpandClick = function() {
      const previewer = document.getElementById('Previewer');
      if (props.title == 'Editor') {
        previewer.style.display = 'none';
        const editor = document.getElementsByTagName('textarea')[0];
        editor.style.height = '80vh';
      }else if (props.title == 'Previewer') {
        const editor = document.getElementById('Editor');
        editor.style.display = 'none';
      }
      const maximizeIcons = document.getElementsByClassName('maximize-icon');
      for (let icon of maximizeIcons) {
        icon.style.display = 'none';
      }
      const minimizeIcons = document.getElementsByClassName('minimize-icon');
      for (let icon of minimizeIcons) {
        icon.style.display = 'block';
      }
    }

    const handleMinimizeClick = function() {
      const previewer = document.getElementById('Previewer');
      const editor = document.getElementById('Editor');
      previewer.style.display = 'block';
      editor.style.display = 'block';
      const textarea = document.getElementsByTagName('textarea')[0];
      textarea.style.height = '400px';
      const maximizeIcons = document.getElementsByClassName('maximize-icon');
      for (let icon of maximizeIcons) {
        icon.style.display = 'block';
      }
      const minimizeIcons = document.getElementsByClassName('minimize-icon');
      for (let icon of minimizeIcons) {
        icon.style.display = 'none';
      }
    }
    return (
      <div id="NavBar" className={props.className}>
        <span className="nav-title">{props.title}</span>
        <FontAwesomeIcon className="maximize-icon" icon={faMaximize} onClick={() => handleExpandClick()} />
        <FontAwesomeIcon className="minimize-icon" icon={faDownLeftAndUpRightToCenter} onClick={() => handleMinimizeClick()} />
      </div>
    )
  }
  
  export default NavBar