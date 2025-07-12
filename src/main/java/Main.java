import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateExceptionHandler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        context.setResourceBase("webapp");

        context.addServlet(new ServletHolder(new FreeMarkerServlet()), "/dashboard");
        context.addServlet(new ServletHolder(new AddEditServlet()), "/add-edit");

        server.start();
        server.join();
    }

    public static class FreeMarkerServlet extends HttpServlet {
        protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
            cfg.setDirectoryForTemplateLoading(new File("webapp/templates"));
            cfg.setDefaultEncoding("UTF-8");
            cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);

            Map<String, Object> dataModel = new HashMap<>();
            dataModel.put("employees", Arrays.asList(
                    Map.of("id", 1, "firstName", "Alice", "lastName", "Smith", "email", "alice@example.com", "department", "HR", "role", "Manager"),
                    Map.of("id", 2, "firstName", "Bob", "lastName", "Johnson", "email", "bob@example.com", "department", "IT", "role", "Developer"),
                    Map.of("id", 3, "firstName", "Charlie", "lastName", "Lee", "email", "charlie@example.com", "department", "Finance", "role", "Analyst")
            ));

            resp.setContentType("text/html");
            Template template = cfg.getTemplate("dashboard.ftl");
            try (Writer out = resp.getWriter()) {
                template.process(dataModel, out);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static class AddEditServlet extends HttpServlet {
        protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
            cfg.setDirectoryForTemplateLoading(new File("webapp/templates"));
            cfg.setDefaultEncoding("UTF-8");

            resp.setContentType("text/html");
            Template template = cfg.getTemplate("add-edit.ftl");
            try (Writer out = resp.getWriter()) {
                template.process(new HashMap<>(), out);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
