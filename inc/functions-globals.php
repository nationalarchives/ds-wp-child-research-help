<?php

/**
 * Sets globals which are used by URL and breadcrumb generating code
 *
 * @param string $environment - a string of either 'internal', 'development' or 'external'
 */
function setThemeGlobals($environment = null) {
    if ($environment === null) {
        throw new BadFunctionCallException('setThemeGlobals function must be passed at string that represents the environment');
    }

    global $pre_path;
    global $pre_crumbs;

    switch ($environment) {
        case 'internal':
        case 'development':
            $pre_path = '';
            $pre_crumbs = array('Help with your research' => '/');
            break;
        case 'external':
        case 'aws_public':
            $pre_crumbs = array(
                'Help with your research' => '/help-with-your-research/'
            );
            $pre_path = '/help-with-your-research';
            break;
    }
}