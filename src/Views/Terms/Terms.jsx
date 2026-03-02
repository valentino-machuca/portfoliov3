import { motion } from 'framer-motion';
import s from './Terms.module.scss';


const Terms = () => {

  return (
    <motion.div className={s.container}
            id='asadito'
            
    >
      <motion.div className={s.devContainer}>
        <h1 styles={{marginBottom: '-2rem'}}>Política de Privacidad</h1>
        <p>Esta política de privacidad se aplica a la aplicación para dispositivos móviles "Asadito" (en adelante, la "Aplicación"), creada por vmachuca (en adelante, el "Proveedor de Servicios") como un servicio gratuito. Este servicio se proporciona "TAL CUAL" (AS IS).</p>
        <br/>
        <strong>Recopilación y Uso de la Información</strong>
        <p>
            La Aplicación no recopila, almacena ni transmite ningún tipo de información personal o datos de uso cuando la descargas o la utilizas. Para funcionar y realizar los cálculos, la Aplicación opera exclusivamente de forma local en tu dispositivo. No se requiere registro ni creación de cuentas para su uso.
        </p>
        <br/>
        <strong>Ubicación</strong>
        <p>
            Esta Aplicación no recopila, solicita ni rastrea información sobre la ubicación precisa o aproximada de tu dispositivo móvil.
        </p>
        <br/>
        <strong>Acceso de Terceros</strong>
        <p>
            Dado que la Aplicación no recopila ningún tipo de información personal, no existe ningún intercambio de datos con terceros ni servicios externos.
        </p>
        <br/>
        <strong>Privacidad Infantil</strong>
        <p>
            La Aplicación no se utiliza para solicitar datos de forma intencionada ni para comercializar con menores de edad. Al no recopilar ningún tipo de información de sus usuarios, el Proveedor de Servicios tampoco recopila información de identificación personal de menores. Si tienes alguna duda, puedes contactar al Proveedor de Servicios en valentinomachuca.dev@gmail.com.
        </p>
        <br/>
        <strong>Retención y Eliminación de Datos</strong>
        <p>
            Debido a que la Aplicación no recopila ni almacena datos personales de los usuarios en ningún servidor externo, no existe información personal que retener o eliminar. Al desinstalar la Aplicación de tu dispositivo, se borrarán los datos de configuración locales que hayas guardado en el teléfono.
        </p>
        <br/>
        <strong>Seguridad</strong>
        <p>
            El Proveedor de Servicios se preocupa por salvaguardar la confidencialidad de tu información. Sin embargo, dado que la Aplicación no recopila ni transmite datos personales, el riesgo de que tu información sea interceptada o accedida por personas no autorizadas a través de esta Aplicación es nulo.
        </p>
        <br/>
        <strong>Cambios en esta Política</strong>
        <p>
            Esta Política de Privacidad puede ser actualizada ocasionalmente. El Proveedor de Servicios te notificará sobre cualquier cambio publicando la nueva Política de Privacidad en esta misma página. Se recomienda consultar esta página periódicamente.
        </p>
        <p>
            Fecha de vigencia: 01-04-2026
        </p>
        <br/>
        <strong>Contacto</strong>
        <p>
            Si tienes alguna pregunta relacionada con la privacidad durante el uso de la Aplicación, comunícate con el Proveedor de Servicios a través del correo electrónico: valentinomachuca.dev@gmail.com.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Terms;