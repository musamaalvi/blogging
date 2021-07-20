using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DAL;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Query.Handlers
{
    public class FetchItemQueryHandler : IRequestHandler<FetchItemQuery, List<AboutUs>>
    {
        private readonly AboutUsService _aboutus;

        public FetchItemQueryHandler(AboutUsService aboutus)
        {
            _aboutus = aboutus;
        }
        public async Task<List<AboutUs>> Handle(FetchItemQuery request, CancellationToken cancellationToken)
        {
            return _aboutus.Get();
            
        }
    }
}
