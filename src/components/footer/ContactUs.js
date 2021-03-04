import React from 'react';

class ContactUs extends React.PureComponent {
    state = {
        name: null,
        email: null,
        subject: null,
        msg: null,
        submitEmail: null
    }
    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    handleSubjectChange = e => {
        this.setState({
            subject: e.target.value
        })
    }
    handleMsgChange = e => {
        this.setState({
            msg: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            submitEmail: 'Hello' 
        })
    }
    render() {
        return (
            <div style={{...contactInfoContainer}}>
                <h3 style={{ marginBottom: '2rem' }}>Contact Us</h3>
                <form style={{width: '100%'}} onSubmit={this.handleSubmit}>   
                    <input style={{...inputStyle}} type='text' value={this.state.name} placeholder='Name' onChange={this.handleNameChange}></input>
                    <input style={{...inputStyle}} type='email' value={this.state.email} placeholder='Email' onChange={this.handleEmailChange}></input>
                    <input style={{...inputStyle}} type='text' value={this.state.subject} placeholder='Subject' onChange={this.handleSubjectChange}></input>
                    <textarea style={{ ...textareaStyle }} type='text' value={this.state.msg} placeholder='Message' onChange={this.handleMsgChange}></textarea>  
                    <button style={{...buttonStyle}}>Submit</button>   
                </form>
            </div>
        );
    }
};

const contactInfoContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    color: '#ffffff',
    width: '100%',
}

const inputStyle = {
    width: '100%',
    height: '40px',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '4px'
}

const textareaStyle = {
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '60px',
    maxHeight: '120px',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '1rem'
}

const buttonStyle = {
    display: 'inline-block',
    padding: '1rem 5rem 1rem 5rem',
    borderRadius: '60px',
    background: 'linear-gradient(94deg, #3cb4be 0, #43de7f 97%)',
    color: '#ffffff',
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box'
}

export default ContactUs;