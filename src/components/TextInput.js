import React from 'react'

export default function TextInput(props) {
    return (
        <div className='editor'>
            <div className="toolbar"><p>Editor</p></div>
            <textarea id="editor" type="text" onChange={ props.handleChange } value = { props.value } />
        </div>
    )
}
