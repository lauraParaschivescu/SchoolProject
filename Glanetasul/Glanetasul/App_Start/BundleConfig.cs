using System.Web.Optimization;

namespace Glanetasul
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/jquery-3.1.1.js",
                      "~/Scripts/angular.js"));

            bundles.Add(new StyleBundle("~/bundles/styles").Include(
                      "~/Content/bootstrap.css"));

#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}