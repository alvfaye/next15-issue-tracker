import Link from 'next/link'
import {Button} from '@/components/ui/button'

const NewIssue = () => {
  return (
    <Button>
      <Link href="/issues/new">Create New Issue</Link>
    </Button>
  );
}
 
export default NewIssue;