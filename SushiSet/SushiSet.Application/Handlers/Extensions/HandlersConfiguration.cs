﻿using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.Extensions;
using SushiSet.Application.Handlers.QueryHandlers.Extensions;

namespace SushiSet.Application.Handlers.Extensions
{
    public static class HandlersConfiguration
    {
        public static void AddHandlers(this IServiceCollection services)
        {
            services.AddCategoryCommandHandlers();
            services.AddCategoryQueryHandlers();

            services.AddItemCommandHandlers();
            services.AddItemQueryHandlers();

            services.AddOrderCommandHandlers();
            services.AddOrderQueryHandlers();

            services.AddAdminCommandHandlers();
            services.AddAdminQueryHandlers();

            services.AddCustomerCommandHandlers();
            services.AddCustomerQueryHandlers();

            services.AddCourierCommandHandlers();
            services.AddCourierQueryHandlers();

            services.AddCityCommandHandlers();
            services.AddCityQueryHandlers();

            services.AddShopCommandHandlers();
            services.AddShopQueryHandlers();
        }
    }
}
