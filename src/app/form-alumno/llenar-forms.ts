import { Nacionalidad } from '../_models/nacionalidad';
import { OfertaEducativa } from '../_models/oferta-educativa';
import { Provincia } from '../_models/provincia';
import { SexoAlumno } from '../_models/sexo-alumno';
import { TipoDocumento } from '../_models/tipo-documento';

export class LlenarForms {

    llenarDocumentos(tipoDocs: TipoDocumento[]) {
        const d1 = new TipoDocumento();
        d1.descCorta = 'DNI';
        d1.descripcion = 'DOCUMENTO';
        d1.id = 1;

        const d2 = new TipoDocumento();
        d2.descCorta = 'PASAPORTE';
        d2.descripcion = 'DOCUMENTO';
        d2.id = 2;

        tipoDocs.push(d1, d2);

    }


    llenarProvincias(provs: Provincia[]) {
        const p1 = new Provincia();
        p1.descripcionProvincia = 'Buenos Aires';
        p1.id = 1;

        const p2 = new Provincia();
        p2.descripcionProvincia = 'Santiago del estero';
        p2.id = 2;

        provs.push(p1, p2);
    }

    llenarOfertasEducativas(ofertas: OfertaEducativa[]) {
        const oe = new OfertaEducativa();
        oe.descripcionOferta = '11: oferta educativa llaaaaaaaaaaaaaaargaaaaaa1: oferta educativa' +
            'llaaaaaaaaaaaaaaargaaaaaa1: oferta educativa llaaaaaaaaaaaaaaargaaaaaa: oferta educativa' +
            'llaaaaaaaaaaaaaaargaaaaaa';
        oe.id = 1;

        const oe2 = new OfertaEducativa();
        oe2.descripcionOferta = '2: oferta educativa llaaaaaaaaaaaaaaargaaaaaa';
        oe2.id = 2;

        ofertas.push(oe, oe2);

    }

    llenarSexos(sexoAlumno: SexoAlumno[]) {
        const s1 = new SexoAlumno('F', 'Femenino');
        const s2 = new SexoAlumno('M', 'Masculino');

        sexoAlumno.push(s1, s2);
    }

    llenarNacionalidad(nacs: Nacionalidad[]) {
        const n1 = new Nacionalidad(1, 'Argentina');
        const n2 = new Nacionalidad(2, 'Otra');

        nacs.push(n1, n2);
    }

    llenarPaises(paises: any[]) {
      throw new Error('Method not implemented.');
    }
}
