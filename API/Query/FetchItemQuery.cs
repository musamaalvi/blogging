using API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Query
{
    public class FetchItemQuery : IRequest<List<AboutUs>>
    {

    }
}
