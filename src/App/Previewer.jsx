import NavBar from './Components/NavBar'
import DOMPurify from 'dompurify'

function Previewer(props) {
    const parser = new DOMParser();
    const html = parser.parseFromString(props.HTML, 'text/html').body;
    return (
      <div id="Previewer" className="box-shadow">
        <NavBar title="Previewer" className="box-shadow" />
        <div id="preview" className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}>
        </div>
      </div>
    )
  }
  
  export default Previewer