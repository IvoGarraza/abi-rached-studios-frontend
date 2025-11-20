import React, { useState } from 'react';
import { Mail, Send, Hash, MessageSquare } from 'lucide-react'; 

const ContactForm = ({ switchToLogin }) => {
    // Estado para manejar los datos del formulario de contacto
    const [formData, setFormData] = useState({
        email: '',
        comments: '',
        gamerId: '',
        reason: 'Seleccioná un motivo', 
        acceptTerms: false,
        receiveNews: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const reasonOptions = [
        'Seleccioná un motivo',
        'Reportar bug',
        'Sugerencias',
        'Consultas',
        'Contactar al equipo',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.email || !formData.comments || formData.reason === 'Seleccioná un motivo' || !formData.acceptTerms) {
            return setError('Por favor, completa los campos obligatorios y acepta los términos.');
        }

        setIsLoading(true);
        
        // Simulación de envío
        setTimeout(() => {
            setIsLoading(false);
            setSuccess('¡Formulario enviado! Gracias por tu contacto y soporte.');
        }, 2000);
    };

    return (
        <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-300 border border-gray-700">
            <h1 className="text-4xl font-extrabold text-oro text-center mb-2">
                CONTACTO Y SOPORTE
            </h1>
            <p className="text-center text-sm text-gray-400 mb-8">
                Completa el formulario y te contactaremos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@mail.com"
                            className="block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Comentarios (Textarea) */}
                <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-white mb-1">Dejanos tus comentarios</label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        required
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Escribí acá tus comentarios..."
                        className="block w-full p-3 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out resize-none"
                        disabled={isLoading}
                    />
                </div>
                
                {/* Gamer ID */}
                <div>
                    <label htmlFor="gamerId" className="block text-sm font-medium text-white mb-1">Gamer ID</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Hash className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="gamerId"
                            name="gamerId"
                            type="text"
                            value={formData.gamerId}
                            onChange={handleChange}
                            placeholder="XXXXXXXX"
                            className="block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Motivo de Contacto (Selector) */}
                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-white mb-1">Seleccioná un motivo</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <select
                            id="reason"
                            name="reason"
                            required
                            value={formData.reason}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-10 py-2 bg-gray-700 border-2 border-purpura rounded-lg text-white sm:text-sm appearance-none focus:outline-none focus-purpura transition duration-150 ease-in-out cursor-pointer"
                            disabled={isLoading}
                        >
                            {reasonOptions.map((option, index) => (
                                <option key={index} value={option} disabled={index === 0} className="bg-gray-800 text-white">
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purpura">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Checkbox - Acepto términos y condiciones */}
                <div className="flex items-center">
                    <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-oro border-purpura rounded bg-gray-700 focus:ring-oro"
                        disabled={isLoading}
                    />
                    <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-400">
                        Acepto los <span className="text-purpura hover:text-oro-light cursor-pointer">términos y condiciones</span>
                    </label>
                </div>

                {/* Checkbox - Deseo recibir novedades */}
                <div className="flex items-center">
                    <input
                        id="receiveNews"
                        name="receiveNews"
                        type="checkbox"
                        checked={formData.receiveNews}
                        onChange={handleChange}
                        className="h-4 w-4 text-oro border-purpura rounded bg-gray-700 focus:ring-oro"
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
                            ? 'bg-oro-light cursor-not-allowed' 
                            : 'bg-oro hover:bg-oro-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oro hover:scale-[1.01] focus:ring-offset-gray-900'
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
                        className="font-medium text-gray-400 hover:text-oro-light underline transition-colors"
                    >
                        Volver a Inicio de Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};


export default ContactForm