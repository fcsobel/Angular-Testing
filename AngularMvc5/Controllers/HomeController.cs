using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ngGitHouse.Controllers
{
    public class HomeController : Controller
    {
        // GET: App
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult Charts()
		{
			return View();
		}

		public ActionResult Maps()
		{
			return View();
		}
	}
}