
import { Input } from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Input placeholder='Title' />
      <Textarea placeholder='Description'/>
            {/* Issue List */}
    </div>
  );
};

export default NewIssuePage;
