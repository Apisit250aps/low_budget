'use client'

import InputField from '@/components/forms/InputField'
import TextAreaField from '@/components/forms/TextAreaField'

export default function ProjectForm() {
  return (
    <>
      <form>
        <InputField label={'Title'} placeholder="project title" />
        <TextAreaField
          label={'Description'}
          placeholder="project description"
        />
        <InputField label={'Notification'} placeholder="line group id" />
      </form>
    </>
  )
}
