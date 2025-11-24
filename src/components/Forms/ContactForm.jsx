import React, { useState } from 'react';
import { Mail, Send, Hash, MessageSquare, User } from 'lucide-react'; 
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/contact/contactMessage'; 

const ContactForm = ({ switchToLogin }) => {
    const [formData, setFormData] = useState({
        fullName: '', 
        email: '',
        message: '',
        gamerId: '',
        subject: 'Seleccioná un motivo',
        acceptTerms: false,
        receiveNews: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const subjectOptions = [
        'Seleccioná un motivo',
        'Reportar bug',
        'Sugerencias',
        'Consultas',
        'Contactar al equipo',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

// --- INICIO DEBUGGING ---
        console.log(`Cambio detectado: Campo '${name}', Nuevo valor: '${value}'`);
        // --- FIN DEBUGGING ---

        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validación de campos requeridos (fullName, email, message, subject, acceptTerms)
        if (!formData.fullName || 
            !formData.email || 
            !formData.message || 
            formData.subject === 'Seleccioná un motivo' || 
            !formData.acceptTerms) {
            
            return setError('Por favor, completa todos los campos obligatorios (Nombre Completo, Email, Mensaje, Motivo) y acepta los términos.');
        }
        
        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message, 
        };

        setIsLoading(true);
        
        try {
            const response = await axios.post(API_URL, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = response.data;

            setSuccess(result.message || '¡Formulario enviado! Gracias por contactarnos.');
            setError('');
            // Limpiar campos de contenido para que el usuario pueda enviar otro mensaje
            setFormData(prev => ({ 
                ...prev, 
                message: '', 
                subject: 'Seleccioná un motivo',
            }));
        } catch (err) {
            console.error('Error de red o CORS:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Fallo la conexión con el servidor. Verifica que el backend esté corriendo en: ' + API_URL;
            setError(errorMessage);
            setSuccess('');
        } finally {
            setIsLoading(false);
        }
    };

    const customColors = {
        oro: 'text-[#D1A121]',
        purpura: 'text-[#8A2BE2]',
        'focus-purpura': 'focus:border-[#8A2BE2]',
    };

    return (
        <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-300 border border-gray-700">
            <h1 className={`text-4xl font-extrabold ${customColors.oro} text-center mb-2`}>
                CONTACTO Y SOPORTE
            </h1>
            <p className="text-center text-sm text-gray-400 mb-8">
                Completa el formulario y te contactaremos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Nombre Completo (fullName) */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">Nombre Completo:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className={`h-5 w-5 ${customColors.purpura}`} aria-hidden="true" />
                        </div>
                        <input
                            id="fullName"
                            name="fullName" 
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Tu nombre real o de contacto"
                            className={`block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none ${customColors['focus-purpura']} text-white sm:text-sm transition duration-150 ease-in-out`}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* 2. Email (email) */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className={`h-5 w-5 ${customColors.purpura}`} aria-hidden="true" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@mail.com"
                            className={`block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none ${customColors['focus-purpura']} text-white sm:text-sm transition duration-150 ease-in-out`}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* 3. Motivo de Contacto (subject) */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Seleccioná un motivo:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MessageSquare className={`h-5 w-5 ${customColors.purpura}`} aria-hidden="true" />
                        </div>
                        <select
                            id="subject"
                            name="subject" 
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className={`block w-full pl-10 pr-10 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg text-white sm:text-sm appearance-none focus:outline-none ${customColors['focus-purpura']} transition duration-150 ease-in-out cursor-pointer`}
                            disabled={isLoading}
                        >
                            {subjectOptions.map((option, index) => (
                                <option 
                                    key={index} 
                                    value={option} 
                                    disabled={index === 0} 
                                    className="bg-gray-800 text-white"
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${customColors.purpura}`}>
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 4. Mensaje (message) */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Tu Mensaje:</label>
                    <textarea
                        id="message"
                        name="message" // Coincide con el campo del backend
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribí acá tu mensaje o solicitud..."
                        className={`block w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none ${customColors['focus-purpura']} text-white sm:text-sm transition duration-150 ease-in-out resize-none`}
                        disabled={isLoading}
                    />
                </div>
                
                {/* 5. Gamer ID (Opcional) */}
                <div>
                    <label htmlFor="gamerId" className="block text-sm font-medium text-white mb-1">Gamer ID:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Hash className={`h-5 w-5 ${customColors.purpura}`} aria-hidden="true" />
                        </div>
                        <input
                            id="gamerId"
                            name="gamerId"
                            type="text"
                            value={formData.gamerId}
                            onChange={handleChange}
                            placeholder="XXXXXXXX"
                            className={`block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none ${customColors['focus-purpura']} text-white sm:text-sm transition duration-150 ease-in-out`}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* 6. Acepto términos y condiciones (acceptTerms) - Requerido */}
                <div className="flex items-center">
                    <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className={`h-4 w-4 ${customColors.oro} border-gray-600 rounded bg-gray-700 focus:ring-oro`}
                        disabled={isLoading}
                    />
                    <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-400">
                        Acepto los <span className={`text-purpura hover:text-white cursor-pointer`}>términos y condiciones</span>
                    </label>
                </div>

                {/* 7. Deseo recibir novedades (receiveNews) - Opcional */}
                <div className="flex items-center">
                    <input
                        id="receiveNews"
                        name="receiveNews"
                        type="checkbox"
                        checked={formData.receiveNews}
                        onChange={handleChange}
                        className={`h-4 w-4 ${customColors.oro} border-gray-600 rounded bg-gray-700 focus:ring-oro`}
                        disabled={isLoading}
                    />
                    <label htmlFor="receiveNews" className="ml-3 block text-sm text-gray-400">
                        Deseo recibir novedades de Abi Rached Studios
                    </label>
                </div>

                {/* Manejo de Mensajes (Éxito/Error) */}
                {(error || success) && (
                    <div className={`p-3 rounded-lg border text-sm ${error ? 'bg-red-900 border-red-700 text-red-400' : 'bg-green-900 border-green-700 text-green-400'}`}>
                        {error || success}
                    </div>
                )}

                {/* Botón de Envío */}
                <div className='pt-2'>
                    <button
                        type="submit"
                        className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-gray-900 transition duration-300 ease-in-out 
                            ${isLoading 
                            ? 'bg-yellow-400 cursor-not-allowed'
                            : `bg-[#D1A121] hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:scale-[1.01] focus:ring-offset-gray-900`
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                        )}
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>

                {/* Enlace de vuelta al Login */}
                <div className="flex items-center justify-center text-sm">
                    <button 
                        type="button" 
                        onClick={switchToLogin} 
                        className="font-medium text-gray-400 hover:text-[#355C7D] underline transition-colors"
                    >
                        Volver a Inicio de Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};


export default ContactForm