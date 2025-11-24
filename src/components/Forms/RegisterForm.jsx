import React, { useState } from 'react';
import { User, Mail, Lock, CheckSquare, Zap } from 'lucide-react'; 

const Register = ({ switchToLogin, switchToContact }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        const { name, email, password, confirmPassword } = formData;
  
        if (!name || !email || !password || !confirmPassword) {
            return setError('Todos los campos son obligatorios.');
        }
  
        if (password !== confirmPassword) {
            return setError('Las contraseñas no coinciden.');
        }
  
        if (password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }
  
        setIsLoading(true);
  
        // Simulación de registro
        setTimeout(() => {
            setIsLoading(false);
            
            // Simulación de éxito/error. En un entorno real, esto sería una llamada API
            if (email.endsWith('@gmail.com')) {
                setSuccess('¡Registro exitoso! Puedes iniciar sesión.');
                setTimeout(switchToLogin, 1500); 
            } else {
                setError(`Lo sentimos, el email "${email}" ya está registrado.`);
            }
        }, 2500);
    };

    return (
        <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-300 border border-gray-700">
            
            {/* Encabezado */}
            <h2 className="text-3xl font-extrabold text-oro text-center mb-2">
                Crear una Cuenta
            </h2>
            <p className="text-center text-sm text-gray-400 mb-8">
                Únete a Abi Rached Studios y accede a todo el contenido.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Campo de Nombre */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Nombre Completo
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ej. Juan Pérez"
                            className="appearance-none block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>
                
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
                            value={formData.email}
                            onChange={handleChange}
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
                            autoComplete="new-password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mínimo 6 caracteres"
                            className="appearance-none block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>
                
                {/* Campo de Confirmar Contraseña */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                        Confirmar Contraseña
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CheckSquare className="h-5 w-5 text-purpura" aria-hidden="true" />
                        </div>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Repite tu contraseña"
                            className="appearance-none block w-full pl-10 pr-3 py-2 bg-gray-700 border-2 border-purpura rounded-lg placeholder-gray-500 focus:outline-none focus-purpura text-white sm:text-sm transition duration-150 ease-in-out"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Manejo de Mensajes */}
                {(error || success) && (
                    <div className={`p-3 rounded-lg border text-sm ${error ? 'bg-red-900 border-red-700 text-red-400' : 'bg-green-900 border-green-700 text-green-400'}`}>
                        {error || success}
                    </div>
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
                            <Zap className="h-5 w-5 mr-2" aria-hidden="true" />
                        )}
                        {isLoading ? 'Registrando...' : 'Registrar Cuenta'}
                    </button>
                </div>

                {/* Enlace de inicio de sesión y contacto */}
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
                    <p className='text-gray-400 text-center text-sm'>
                        ¿Ya tienes una cuenta?{' '}
                        <button 
                            type="button" 
                            onClick={switchToLogin} 
                            className="font-medium text-oro hover:text-oro-light underline transition-colors"
                        >
                            Inicia sesión aquí
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
export default Register;