﻿using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CustomerResponses
{
    public class CustomerResponse : Response
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
