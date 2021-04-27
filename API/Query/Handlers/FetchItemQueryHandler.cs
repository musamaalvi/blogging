using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DAL;



namespace API.Query.Handlers
{
    public class FetchItemQueryHandler : IRequestHandler<FetchItemQuery, String>
    {
        
        public FetchItemQueryHandler()
        {
          
        }
        public async Task<string> Handle(FetchItemQuery request, CancellationToken cancellationToken)
        {
            String ss = "dadas";
            return ss;
        }
    }
}
