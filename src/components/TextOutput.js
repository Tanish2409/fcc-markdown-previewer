import React, { Component } from 'react';

const marked = require('marked');

marked.setOptions({
    breaks: true
})

export default class TextOutput extends Component {

    parseMarkdown = (markdown) => {
        return { __html: markdown }
    }

    render() {
        return (
            <div className='preview'>
                <div className="toolbar"><p>Preview</p></div>
                <div id="preview" dangerouslySetInnerHTML = { { __html: marked(this.props.value) } } />
            </div>
        )
    }
}
