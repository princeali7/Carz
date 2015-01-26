// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Startup.cs" company="Hewlett-Packard">
//   Copyright � 2015 Hewlett-Packard
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

[assembly: Microsoft.Owin.OwinStartup(typeof(App.cars_Catalog.Startup))]

namespace App.cars_Catalog
{
    using Owin;

    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //// For more information on how to configure your application, visit:
            //// http://go.microsoft.com/fwlink/?LinkID=316888

            this.ConfigureAuth(app);
        }
    }
}
