import React, { useState, useRef } from 'react';
import ImgHero from '../../components/imgHero';
import { banner } from '../../constant/images/images';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // Replace these with your EmailJS credentials
        emailjs.sendForm(
            'service_por3nnf',
            'template_ok69w5y',
            form.current,
            'np8Qvb_ItnwsL6lPP'       
        )
            .then((result) => {
                console.log('Success:', result.text);
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! We\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsLoading(false);
            }, (error) => {
                console.log('Error:', error.text);
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again.'
                });
                setIsLoading(false);
            });
    };

    return (
        <div>
            {/* Hero Section */}
            <ImgHero title="CONTACT" image={banner} />

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Google Map - Left Side */}
                    <div className="w-full h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174339851436!2d-73.98823368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us your message</h2>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hafsa focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hafsa focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Phone Input */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hafsa focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hafsa focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded ${status.type === 'success'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-10 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'SENDING...' : 'SEND'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;