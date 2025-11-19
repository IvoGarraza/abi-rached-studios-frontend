import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react'; 

const Login = ({ switchToRegister, switchToContact }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulación de autenticación
        setTimeout(() => {
            setIsLoading(false);
            if (email === 'test@studio.com' && password === 'password') {
                console.log('Inicio de sesión exitoso!'); 
            } else {
                setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
            }
        }, 2000);
    };

    return (
        <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-300 border border-gray-700">
            
            {/* Encabezado */}
            <h2 className="text-3xl font-extrabold text-oro text-center mb-2">
                Iniciar Sesión
            </h2>
            <p className="text-center text-sm text-gray-400 mb-8">
                Accede a tu cuenta de Abi Rached Studios
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Campo de Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Correo Electrónico
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ejemplo@dominio.com"
                            className="appearance-none block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Campo de Contraseña */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Contraseña
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="appearance-none block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Manejo de Error */}
                {error && (
                    <p className="text-sm text-red-400 bg-red-900 p-3 rounded-lg border border-red-700">
                        {error}
                    </p>
                )}

                {/* Botón de Envío */}
                <div>
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
                            <LogIn className="h-5 w-5 mr-2" aria-hidden="true" />
                        )}
                        {isLoading ? 'Iniciando Sesión...' : 'Entrar'}
                    </button>
                </div>

                {/* Enlace de registro y contacto */}
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
                    <p className='text-gray-400 text-center text-sm'>
                        ¿No tienes cuenta?{' '}
                        <button 
                        type="button" 
                        onClick={switchToRegister} 
                        className="font-medium text-oro hover:text-oro-light underline transition-colors"
                        >
                        Regístrate aquí
                        </button>
                    </p>
                    <p className='text-gray-500 text-center text-xs'>
                        ¿Problemas?{' '}
                        <button 
                        type="button" 
                        onClick={switchToContact} 
                        className="font-medium text-purpura hover:text-oro-light underline transition-colors"
                        >
                        Contáctanos
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;