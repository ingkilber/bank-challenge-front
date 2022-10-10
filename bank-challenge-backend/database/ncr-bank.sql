-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2022 a las 21:32:58
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ncr-bank`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta_usuarios`
--

CREATE TABLE `cuenta_usuarios` (
  `id_cuenta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_tipo_cuenta` int(11) NOT NULL,
  `nro_cuenta` bigint(20) NOT NULL,
  `saldo` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuenta_usuarios`
--

INSERT INTO `cuenta_usuarios` (`id_cuenta`, `id_usuario`, `id_tipo_cuenta`, `nro_cuenta`, `saldo`) VALUES
(1, 1, 1, 168496987, 0),
(2, 1, 2, 8168496789, 1090),
(3, 1, 1, 6581684963321, 17753),
(4, 1, 2, 654168496852, 8297),
(5, 1, 1, 131268496050, 81398);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_transferencias`
--

CREATE TABLE `historial_transferencias` (
  `id_transferencias` int(11) NOT NULL,
  `id_user_transfer` int(11) NOT NULL,
  `monto` int(11) NOT NULL,
  `id_cta_origen` bigint(11) NOT NULL,
  `id_cta_destino` bigint(11) NOT NULL,
  `nota_transferencia` varchar(255) NOT NULL,
  `fecha_transferencia` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historial_transferencias`
--

INSERT INTO `historial_transferencias` (`id_transferencias`, `id_user_transfer`, `monto`, `id_cta_origen`, `id_cta_destino`, `nota_transferencia`, `fecha_transferencia`) VALUES
(1, 1, 808, 6581684963321, 8168496789, 'Test', '2022-10-10 16:06:17'),
(2, 1, 160, 131268496050, 8168496789, 'Test description', '2022-10-10 16:08:11'),
(3, 1, 7500, 131268496050, 654168496852, 'Description news', '2022-10-10 16:09:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_cuentas`
--

CREATE TABLE `tipos_cuentas` (
  `id_cuenta` int(11) NOT NULL,
  `nombre_cuenta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_cuentas`
--

INSERT INTO `tipos_cuentas` (`id_cuenta`, `nombre_cuenta`) VALUES
(1, 'cuenta corriente'),
(2, 'caja de ahorro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usurios`
--

CREATE TABLE `usurios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `clave` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usurios`
--

INSERT INTO `usurios` (`id_usuario`, `nombre`, `apellido`, `clave`) VALUES
(1, 'yefer', 'marcano', '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cuenta_usuarios`
--
ALTER TABLE `cuenta_usuarios`
  ADD PRIMARY KEY (`id_cuenta`);

--
-- Indices de la tabla `historial_transferencias`
--
ALTER TABLE `historial_transferencias`
  ADD PRIMARY KEY (`id_transferencias`);

--
-- Indices de la tabla `tipos_cuentas`
--
ALTER TABLE `tipos_cuentas`
  ADD PRIMARY KEY (`id_cuenta`);

--
-- Indices de la tabla `usurios`
--
ALTER TABLE `usurios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuenta_usuarios`
--
ALTER TABLE `cuenta_usuarios`
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `historial_transferencias`
--
ALTER TABLE `historial_transferencias`
  MODIFY `id_transferencias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipos_cuentas`
--
ALTER TABLE `tipos_cuentas`
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usurios`
--
ALTER TABLE `usurios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
