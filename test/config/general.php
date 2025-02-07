<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

 use craft\config\GeneralConfig;
 use craft\helpers\App;
 
 return GeneralConfig::create()
     ->defaultWeekStartDay(1)
     ->omitScriptNameInUrls()
     ->preloadSingles()
     ->preventUserEnumeration()
     ->aliases([
         '@webroot' => dirname(__DIR__) . '/web',
         '@uploads' => App::env('PRIMARY_SITE_URL') . '/uploads',
     ])
     // Enable Dev Mode for Debugging
     ->devMode(true)
 ;
 