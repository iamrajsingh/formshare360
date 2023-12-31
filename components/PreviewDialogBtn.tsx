import { Button } from './ui/button'
import {MdPreview} from "react-icons/md"

function PreviewDialogBtn() {
  return (
    <Button className='gap-2' variant="outline">
        <MdPreview className = "h-4 w-4"/>
        Preview</Button>
  )
}

export default PreviewDialogBtn