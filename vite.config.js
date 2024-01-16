import path from 'path'

export default {
    root: path.resolve(__dirname, 'src'),
    base: './',
    resolve: {
        alias: {
            '~bootstrap':path.resolve(__dirname, 'node_modules/bootstrap'),
            '~bootswatch':path.resolve(__dirname, 'node_modules/bootswatch'),
        }
    },

    build: {
        emptyOutDir: true, //vacia el directorio antes de construir
        rollupOptions: {
            // Opciones de configuración de Rollup externas, 
            // mergeadas en la configuracion interna de Rollup con Vite

            input: {
                main: path.resolve(__dirname, 'src/index.html'),
            },
            output: {
                dir: path.resolve(__dirname, 'dist'),
                format: 'es',
            },
        },
        outDir: path.resolve(__dirname, 'dist'),
        minify: false,
    },
    publicDir: 'assets',
    server: {
        // port: 8080,
        hot: true
    }
}