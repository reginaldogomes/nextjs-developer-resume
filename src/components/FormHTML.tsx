import React from 'react'

export const FormHTML = () => {
  return (
    <form
      action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo5MDYwNDI4LCJhZGRyZXNzX2Jvb2tfaWQiOjIwOTMwNiwibGFuZyI6InB0LWJyIn0="
      method="post"
    >
      <label>Primeiro nome</label>
      <input type="text" name="name" />
      <label>E-mail</label>
      <input type="email" required name="email" />
      <input
        type="hidden"
        name="sender"
        value="cmVnaW5hbGRvQGJoc29sdXRpb25zLmNvbS5icg=="
      />
      <button>Subscribe</button>
    </form>
  )
}
