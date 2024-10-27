

function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function CreateForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [submit, setSubmit] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const form = React.useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_xx37ymk', 'template_0ju9cnh', form.current, '77IDTFB-0shg_IxXd')
            .then(() => {
                console.log('SUCCESS!');
                setSubmit(true);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log('FAILED...', error.text);
            }).finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="form">
            <h3>Get in Touch!</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    name="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {loading && <p>Sending your message...</p>}
            {submit && <p>Your message has been sent!</p>}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("FormHere"));
root.render(
    <React.StrictMode>
        <CreateForm />
    </React.StrictMode>
);
