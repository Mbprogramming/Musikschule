using System.Reflection;

namespace Musikschule.Helper
{
    /// <summary>
    /// general helper class
    /// </summary>
    public static class AssemblyHelper
    {
        /// <summary>
        /// return current path of executing assembly
        /// </summary>
        public static string AssemblyDirectory
        {
            get
            {
                var codeBase = Assembly.GetExecutingAssembly().Location;
                var uri = new UriBuilder(codeBase);
                var path = Uri.UnescapeDataString(uri.Path);
                var result = Path.GetDirectoryName(path);
                if (result != null)
                    return result;
                return "";
            }
        }
    }
}
